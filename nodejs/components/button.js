export const getButton = (title, to) => {
  return `
    <tr>
      <td align="left" style="font-family: Tahoma; font-style: normal; font-weight: bold; font-size: 12px; line-height: 16px; padding: 0px 0px 24px 0px;">
        <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ffe000; border-radius: 15px">
          <tbody>
            <tr>
              <td
                align="center"
                style="
                  color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 14px;
                  font-weight: bold;
                  letter-spacing: -0.5px;
                  line-height: 150%;
                  padding-top: 15px;
                  padding-right: 50px;
                  padding-bottom: 15px;
                  padding-left: 50px;
                "
                valign="middle"
              >
                <a href="${to}" style="color: #000000; text-decoration: none" target="_blank">${title}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `;
};
