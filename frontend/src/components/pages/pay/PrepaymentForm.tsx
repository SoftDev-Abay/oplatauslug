import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function PrepaymentForm() {
  const { state } = useLocation();
  const { payAmount } = state; // Read values passed on state

  const [formData, setFormData] = useState({
    STPimsApiPartnerKey: "",
    PhoneNumber: "",
    CardNumber: "",
    CardExpireDate: "",
    ServiceId: "",
    ServiceType: "",
    PaymentType: "",
    PaymentDateFrom: "",
    PaymentDateTo: "",
    RegionId: "",
    SubRegionId: "",
    PersonalAccount: "",
    PaymentAmount: payAmount,
    Lang: "ru",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const xmlData = `
      <PrepaymentRequest>
        <StPimsApiPartnerKey>${formData.STPimsApiPartnerKey}</StPimsApiPartnerKey>
        <PhoneNumber>${formData.PhoneNumber}</PhoneNumber>
        <CardNumber>${formData.CardNumber}</CardNumber>
        <CardExpireDate>${formData.CardExpireDate}</CardExpireDate>
        <ServiceId>${formData.ServiceId}</ServiceId>
        <ServiceType>${formData.ServiceType}</ServiceType>
        <PaymentType>${formData.PaymentType}</PaymentType>
        <PaymentDateFrom>${formData.PaymentDateFrom}</PaymentDateFrom>
        <PaymentDateTo>${formData.PaymentDateTo}</PaymentDateTo>
        <RegionId>${formData.RegionId}</RegionId>
        <SubRegionId>${formData.SubRegionId}</SubRegionId>
        <PersonalAccount>${formData.PersonalAccount}</PersonalAccount>
        <PaymentAmount>${formData.PaymentAmount}</PaymentAmount>
        <Lang>${formData.Lang}</Lang>
      </PrepaymentRequest>
    `;

    try {
      const response = await fetch("https://IP:PORT/STAPI/STWS?wsdl", {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
        },
        body: xmlData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="STPimsApiPartnerKey"
        value={formData.STPimsApiPartnerKey}
        onChange={handleChange}
        placeholder="STPimsApiPartnerKey"
        required
      />
      <input
        name="PhoneNumber"
        value={formData.PhoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <input
        name="CardNumber"
        value={formData.CardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
      />
      <input
        name="CardExpireDate"
        value={formData.CardExpireDate}
        onChange={handleChange}
        placeholder="Card Expire Date"
        required
      />
      <input
        name="ServiceId"
        value={formData.ServiceId}
        onChange={handleChange}
        placeholder="Service ID"
        required
      />
      <input
        name="ServiceType"
        value={formData.ServiceType}
        onChange={handleChange}
        placeholder="Service Type"
        required
      />
      <input
        name="PaymentType"
        value={formData.PaymentType}
        onChange={handleChange}
        placeholder="Payment Type"
      />
      <input
        name="PaymentDateFrom"
        value={formData.PaymentDateFrom}
        onChange={handleChange}
        placeholder="Payment Date From"
      />
      <input
        name="PaymentDateTo"
        value={formData.PaymentDateTo}
        onChange={handleChange}
        placeholder="Payment Date To"
      />
      <input
        name="RegionId"
        value={formData.RegionId}
        onChange={handleChange}
        placeholder="Region ID"
      />
      <input
        name="SubRegionId"
        value={formData.SubRegionId}
        onChange={handleChange}
        placeholder="SubRegion ID"
      />
      <input
        name="PersonalAccount"
        value={formData.PersonalAccount}
        onChange={handleChange}
        placeholder="Personal Account"
        required
      />
      <input
        name="PaymentAmount"
        value={formData.PaymentAmount}
        readOnly
        placeholder="Payment Amount"
        required
      />
      <select name="Lang" value={formData.Lang} onChange={handleChange}>
        <option value="ru">ru</option>
        <option value="uz">uz</option>
        <option value="en">en</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PrepaymentForm;
