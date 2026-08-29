module.exports = {
  // Token tài khoản Discord (Selfbot) — đọc từ environment secret
  DISCORD_TOKEN: process.env.DISCORD_TOKEN || "",
  // Token Bot Discord — đọc từ environment secret
  BOT_TOKEN: process.env.BOT_TOKEN || "",
  // Kênh nguồn tổng hợp của Server 2 — đọc từ environment variable
  SERVER_2_SOURCE_CHANNEL_ID: process.env.SERVER_2_SOURCE_CHANNEL_ID || "",
  // Danh sách các ID Discord Admin
  ADMIN_IDS: process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',') : ["1122110156847726632"]
};
