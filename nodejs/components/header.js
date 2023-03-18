export const getHeader = (utm) => {
  return `
  <div
  class="header"
  style="
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-text-size-adjust: 100%;
    background-color: #f4f4f4;
    margin: 0;
    table-layout: fixed;
    text-align: center;
  "
>
  <!--[if (gte mso 9)|(IE)]>
                    <table width="600" align="center">
                        <tr>
                            <td>
                    <![endif]-->
  <table
    align="center"
    cellpadding="0"
    cellspacing="0"
    class="outer"
    style="
      border-collapse: collapse;
      margin: 0 auto;
      max-width: 560px;
      padding-left: 0;
      text-align: left;
      width: 100%;
    "
    width="100%"
  >
    <tbody>
      <tr>
        <td align="center" class="plr30" style="padding: 20px 40px 20px 40px">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td>
                  <a href="https://hr.zarplata.ru" target="_blank"
                    ><img
                      alt="Зарплата.ру"
                      height="20"
                      src="https://i.hh.ru/mailing/zarplata.ru/logo.png?h=\${userHash!}&i=\${hhid!}&e=\${email!}&utm_source=email&utm_medium=email&utm_campaign=${utm}&sent_date=\${CurrDate}&utm_content=logo"
                      style="
                        -ms-interpolation-mode: bicubic;
                        display: block;
                        border: none;
                      "
                      width="143"
                  /></a>
                </td>
                <!-- REGISTRATION LINK -->
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  `
}

