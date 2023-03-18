export const getPreheader = (text) => {
  return `
    <div
    ems:preheader="${text}"
    style="
      display: none !important;
      font-size: 1px;
      color: #333333;
      line-height: 1px;
      max-height: 0px;
      max-width: 0px;
      opacity: 0;
      overflow: hidden;
      mso-hide: all;
    "
    >
    ${text}
    </div>
    
    `;
};
