"""Entrypoint for the judge-laugh one-liner.

Reads line.txt, prints the line, and validates it is a single line
within the 200-character cap. Exits non-zero on any violation.
"""

import sys
from pathlib import Path

MAX_CHARS = 200


def main() -> int:
    text = Path(__file__).with_name("line.txt").read_text(encoding="utf-8")
    line = text.strip()
    if not line:
        print("error: line.txt is empty", file=sys.stderr)
        return 1
    if "\n" in line:
        print("error: line must be a single line", file=sys.stderr)
        return 1
    if len(line) > MAX_CHARS:
        print(
            f"error: line is {len(line)} chars, over the {MAX_CHARS}-char cap",
            file=sys.stderr,
        )
        return 1
    print(line)
    print(f"ok: {len(line)} chars, within the {MAX_CHARS}-char cap")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
