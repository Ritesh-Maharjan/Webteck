// app/admin/[[...slug]]/page.js
export default function AdminPage() {
  return (
    <html>
      <body>
        {/* Match the HTML structure exactly */}
        <div id="nc-root"></div>
        <script
          src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
          defer
        ></script>
      </body>
    </html>
  );
}
