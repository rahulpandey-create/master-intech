<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
>

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">

    <html>

      <head>

        <title>Master Intech Solutions - Sitemap</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <style>

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 40px 20px;
            background: #050505;
            color: #ffffff;
            font-family:
              Arial,
              Helvetica,
              sans-serif;
          }

          .container {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
          }

          .header {
            margin-bottom: 35px;
          }

          .brand {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #6ea8ff;
            text-transform: uppercase;
            margin-bottom: 12px;
          }

          h1 {
            margin: 0 0 10px;
            font-size: 36px;
            line-height: 1.1;
          }

          .description {
            margin: 0;
            color: #999999;
            font-size: 15px;
            line-height: 1.6;
          }

          .sitemap {
            display: grid;
            gap: 12px;
          }

          .url {
            display: block;
            padding: 18px 20px;
            background: #101010;
            border: 1px solid #242424;
            border-radius: 10px;
            color: #ffffff;
            text-decoration: none;
            transition:
              border-color 0.2s ease,
              transform 0.2s ease,
              background 0.2s ease;
            word-break: break-word;
          }

          .url:hover {
            background: #151515;
            border-color: #6ea8ff;
            transform: translateY(-2px);
          }

          .url-label {
            display: block;
            margin-bottom: 6px;
            font-size: 14px;
            font-weight: 600;
          }

          .url-address {
            display: block;
            color: #777777;
            font-size: 13px;
          }

          .footer {
            margin-top: 35px;
            padding-top: 20px;
            border-top: 1px solid #222222;
            color: #666666;
            font-size: 13px;
          }

          @media (max-width: 600px) {

            body {
              padding: 25px 15px;
            }

            h1 {
              font-size: 28px;
            }

            .url {
              padding: 15px;
            }

          }

        </style>

      </head>

      <body>

        <div class="container">

          <div class="header">

            <div class="brand">
              Master Intech Solutions
            </div>

            <h1>XML Sitemap</h1>

            <p class="description">
              This sitemap contains the publicly available pages
              of Master Intech Solutions.
            </p>

          </div>

          <div class="sitemap">

            <xsl:for-each select="s:urlset/s:url">

              <a
                class="url"
                href="{s:loc}"
              >

                <span class="url-label">
                  <xsl:choose>

                    <xsl:when test="s:loc = 'https://masterintechsolutions.com/'">
                      Home
                    </xsl:when>

                    <xsl:when test="contains(s:loc, '/portfolio')">
                      Portfolio
                    </xsl:when>

                    <xsl:when test="s:loc = 'https://masterintechsolutions.com/services'">
                      Services
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'ai-intelligent-automation')">
                      AI &amp; Intelligent Automation
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'custom-portal-development')">
                      Custom Portal Development
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'web-application-development')">
                      Web Application Development
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'ui-ux-product-design')">
                      UI/UX Product Design
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'digital-marketing')">
                      Digital Marketing
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'cyber-security')">
                      Cyber Security
                    </xsl:when>

                    <xsl:when test="contains(s:loc, 'startup-offer')">
                      Startup Solutions
                    </xsl:when>

                    <xsl:otherwise>
                      Master Intech Page
                    </xsl:otherwise>

                  </xsl:choose>
                </span>

                <span class="url-address">
                  <xsl:value-of select="s:loc"/>
                </span>

              </a>

            </xsl:for-each>

          </div>

          <div class="footer">
            Total pages:
            <xsl:value-of select="count(s:urlset/s:url)"/>
          </div>

        </div>

      </body>

    </html>

  </xsl:template>

</xsl:stylesheet>