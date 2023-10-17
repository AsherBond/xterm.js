/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * UnicodeVersionProvider for V11.
 */

import { Terminal, ITerminalAddon } from 'xterm';
import { UnicodeV11 } from './UnicodeV11';
import { Unicode11Addon as IUnicode11Api } from 'xterm-addon-unicode11';

export class Unicode11Addon implements ITerminalAddon , IUnicode11Api {
  public activate(terminal: Terminal): void {
    terminal.unicode.register(new UnicodeV11());
  }
  public dispose(): void { }
}
