@echo off
title Xigncode-Bypass-Standalone --- by ZC
cd /d "%~dp0"

WHERE node > NUL 2> NUL
IF %ERRORLEVEL% NEQ 0 (
  ECHO ERROR: Node.js is not installed!
) ELSE (
  node --use-strict ./index.js
)

ECHO(
PAUSE
