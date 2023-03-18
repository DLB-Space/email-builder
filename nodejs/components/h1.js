export const getH1 = (text) => {
  return `
  <tr style="border-collapse: collapse">
  <td
    align="left"
    style="padding: 0; margin: 0; padding-bottom: 24px"
    valign="top"
  >
    <table
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
      "
      width="100%"
    >
      <tbody>
        <tr style="border-collapse: collapse">
          <td align="left" style="padding: 0; margin: 0">
            <h1
              style="
                margin: 0;
                -webkit-text-size-adjust: none;
                -ms-text-size-adjust: none;
                mso-line-height-rule: exactly;
                font-family: Tahoma, Arial, 'helvetica neue', helvetica,
                  sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
                color: #18160b;
              "
            >
              ${text}
            </h1>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
  `
}


