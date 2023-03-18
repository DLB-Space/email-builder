export const getContentCover = (source, to) => {
  return `
  <tr>
  <td align="center" style="padding: 0px 0px 0px 0px">
    <!--https://xfl.jp/8oc7UG--><a
      href="${to}"
      target="_blank"
      ><img
        alt=""
        src="${source}"
        style="
          border: 0px none;
          width: 100%;
          max-width: 560px;
          height: 207px;
          display: block;
          border-radius: 24px 24px 0px 0px;
        "
      />
    </a>
  </td>
</tr>

  `
}
