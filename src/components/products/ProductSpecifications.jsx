import React from "react";
import { useTranslation } from "react-i18next";

const SpecsTable = ({ rows }) => (
  <table className="specs-table">
    <tbody>
      {rows.map((row, ri) => (
        <tr key={ri}>
          <th>{row.label}</th>
          <td>{row.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ProductSpecifications = ({ specsContent }) => {
  const { t } = useTranslation();

  if (specsContent?.sections) {
    return (
      <div className="specs-sections">
        {specsContent.sections.map((section, si) => (
          <div key={si} className="specs-section">
            <h3 className="specs-section-title">{section.title}</h3>
            <SpecsTable rows={section.rows} />
            {section.images && (
              <div className="specs-images">
                {section.images.map((img, ii) => (
                  <img key={ii} src={img} alt={`${section.title} ${ii + 1}`} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (specsContent?.rows) {
    return <SpecsTable rows={specsContent.rows} />;
  }

  return <p className="detail-placeholder">{t("common.specificationsComingSoon")}</p>;
};

export default ProductSpecifications;
