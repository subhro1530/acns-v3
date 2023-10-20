/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "inline", // or "attachment" for download
          },
        ],
      },
    ];
  },
};
