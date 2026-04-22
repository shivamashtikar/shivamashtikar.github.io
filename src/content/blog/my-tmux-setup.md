---
title: "My Tmux Configuration for an Efficient Terminal Workflow"
date: 2025-06-01
categories: [productivity, terminal, tmux]
tags: [tmux, terminal, productivity, configuration, linux, dotfiles]
description: "A detailed walkthrough of my tmux.conf setup with custom keybindings, window management, and plugin integrations for a streamlined terminal workflow."
---

I've been fine-tuning my `tmux` configuration to streamline my development workflow. This setup focuses on productivity, pane/window management, and Vim integration. Below is a breakdown of my configuration with explanations.

---

## 🐚 Shell & History

```tmux
# Use Zsh as the default shell
set-option -g default-shell /bin/zsh

# Maintain a long command history
set -g history-limit 10000
```

---

## 🪟 Pane Navigation & Resizing

### Navigation using `Alt` + Arrow Keys

```tmux
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D
```

### Resizing Panes using `Shift` + Arrow Keys

```tmux
bind -n S-Left resize-pane -L 2
bind -n S-Right resize-pane -R 2
bind -n S-Down resize-pane -D 1
bind -n S-Up resize-pane -U 1
```

---

## 🧭 Vim-Compatible Pane Movement

Using `Alt + h/j/k/l` for pane navigation (integrated with Vim splits):

```tmux
set -g @plugin 'sunaku/tmux-navigate'
set -g @navigate-left  '-n M-h'
set -g @navigate-down  '-n M-j'
set -g @navigate-up    '-n M-k'
set -g @navigate-right '-n M-l'
set -g @navigate-back  '-n M-\'
```

> **Note:** Requires the [sunaku/tmux-navigate](https://github.com/sunaku/tmux-navigate) plugin in your Vim/Neovim configuration.

---

## 📂 Pane & Window Management

Create new windows/panes in the current path:

```tmux
bind c new-window -c "#{pane_current_path}"
bind '"' split-window -c "#{pane_current_path}"
bind % split-window -h -c "#{pane_current_path}"
```

Quick actions with `Alt` key bindings:

```tmux
bind-key -n M-n new-window -c "#{pane_current_path}"
bind-key -n M-N new-session -c "#{pane_current_path}"
bind-key -n M-'" split-window -h -c "#{pane_current_path}"
bind-key -n M-/ split-window -v -c "#{pane_current_path}"
```

Toggle fullscreen:

```tmux
bind-key -n M-f resize-pane -Z
```

---

## 🧹 Clean Up & Exit

```tmux
bind-key -n M-q confirm-before "kill-pane"
bind-key -n M-Q confirm-before "kill-window"
bind-key X run-shell 'tmux switch-client -n \; kill-session -t "$(tmux display-message -p "#S")" || tmux kill-session'
```

---

## 🔢 Window Indexing and Navigation

```tmux
set -g base-index 1
set-window-option -g pane-base-index 1
set -g renumber-windows on
```

Quick switch with `Alt + [1–9, 0]`:

```tmux
bind-key -n M-1 select-window -t :1
...
bind-key -n M-0 select-window -t :10
bind-key -n M-= last-window
```

---

## ↔️ Rearranging Windows & Panes

Move and rotate windows:

```tmux
bind-key -n M-` move-window -t 0
bind-key -n M-< swap-window -t -1
bind-key -n M-> swap-window -t +1
bind-key -n M-r rotate-window
```

Layout presets:

```tmux
bind-key -n M-w select-layout main-vertical
bind-key -n M-e select-layout main-horizontal
bind-key -n M-W select-layout even-vertical
bind-key -n M-E select-layout even-horizontal
```

---

## 🔀 Pane Movement Across Windows

```tmux
bind-key -n M-x select-pane -m
bind-key -n M-X select-pane -M
bind-key -n M-y switch-client -t'{marked}'
bind-key -n M-z join-pane
bind-key -n M-B break-pane
bind-key -n M-m command-prompt -p "move pane to:"  "move-pane -t '%%'"
```

---

## 🧭 Navigation and Tree View

```tmux
bind-key -n M-d resize-pane -Z \; choose-tree -w -F "#{pane_current_path} - #{pane_current_command}"
```

---

## 🔁 Scratchpad Window

```tmux
bind-key -n M-u if-shell -F '#{==:#{session_name},scratch}' {
  detach-client
} {
  display-popup -E "tmux new-session -A -s scratch"
}
```

---

## 🪪 Rename & Status

```tmux
bind-key -n M-R command-prompt -I "" "rename-window '%%'"
set-window-option -g clock-mode-style 12
set -g status-position top
```

---

## 🖱️ Visual & Copy Mode

```tmux
setw -g mode-keys vi
bind-key -T copy-mode-vi v send-keys -X begin-selection
...
set-option -g set-clipboard off
set -g mouse on
```

---

## 🎨 Theme & Status Bar

Using a custom OneDark-inspired theme:

```tmux
setenv -g SHOW_DIRECTORY_NAME 1
set -g @plugin 'shivamashtikar/tmux-onedark-theme'
```

---

## 🔍 FZF Integration

Quickly switch between panes/windows with `Alt+o`:

```tmux
set -g @plugin 'sainnhe/tmux-fzf'
bind-key -n M-o run-shell -b "~/.tmux/plugins/tmux-fzf/scripts/window.sh switch"
TMUX_FZF_ORDER="window|session|pane|command|keybinding|clipboard|process"
```

---

## 🧩 Plugins Used

```tmux
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'sunaku/tmux-navigate'
set -g @plugin 'shivamashtikar/tmux-onedark-theme'
set -g @plugin 'sainnhe/tmux-fzf'
set -g @plugin 'tmux-plugins/tmux-copycat'
set -g @plugin 'tmux-plugins/tmux-open'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
```

Enable session restore:

```tmux
set -g @continuum-restore 'on'
```

---

## 🔁 Reload Configuration

```tmux
bind R source-file ~/.tmux.conf \; display "Reloaded .tmux.conf file"
```

Initialize TPM at the end of the file:

```tmux
run '~/.tmux/plugins/tpm/tpm'
```

---

## 📦 Final Thoughts

This `tmux` configuration aims to supercharge your terminal with intuitive keybindings, smart integrations, and an efficient layout. Whether you're juggling code across multiple panes or navigating across sessions, this setup should keep things fast and fluid.

If you have suggestions or enhancements, feel free to reach out or [fork the config](https://github.com/shivamashtikar/easy-tmux)!

Happy hacking!
