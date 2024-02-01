/**
 * NvChad theme template
 */
export const themeTemplate = `
  local M = {}
  M.base_30 = #base30#
  M.base_16 = #base16# 
  M.type = "dark"
  M = require("base46").override_theme(M, "#name#")
  return M
`;
