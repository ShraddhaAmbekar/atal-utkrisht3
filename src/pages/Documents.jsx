import React from 'react'

const Documents = () => {

  const pdfs = [
    {
      title: "Annual Academic Calendar",
      url: "/assets/pdfs/Annualacademiccalendar.pdf",
    },

    {
      title: "Fee Structure of the School",
      url: "/assets/pdfs/Feestructureofschool.pdf",
    },

    {
      title: "List of School Management Committee (SMC)",
      url: "/assets/pdfs/ListofSMCMembers.pdf",
    },

    {
      title: "List of Parents Teachers Association (PTA) Members",
      url: "/assets/pdfs/ListofPTAMembers.pdf",
    },

    {
      title: "Copy of Affiliation Letter to CBSE",
      url: "/assets/pdfs/copyofaffiliation.pdf",
    },

    {
      title: "Copy of Society - Renewal",
      url: "/assets/pdfs/copyofsocietiescertificate.pdf",
    },

    {
      title: "School Result Of Last 3 years",
      url: "/assets/pdfs/Lastthreeyearresult.pdf",
    },
    {
      title: "Copy of Self Certification",
      url: "/assets/pdfs/selfcertification.pdf",
    },
    {
      title: "Copy of Recognition Certification",
      url: "/assets/pdfs/copiesofrecognitioncertificate.pdf",
    },
    {
      title: "Certificate of Land",
      url: "/assets/pdfs/Landcertificate.pdf",
    },
    {
      title: "Fire Safety Certificate",
      url: "/assets/pdfs/firesefety.pdf",
    },
    {
      title: "Building Safety Certificate",
      url: "/assets/pdfs/buildingsafetycertificate.pdf",
    },
    {
      title: "Safe Drinking Water Certificate",
      url: "/assets/pdfs/watercertificate.pdf",
    },
    {
      title: "Mandatory Disclosure Details",
      url: "/assets/pdfs/MandatoryDisclosureDetails.pdf",
    },
  ];


  return (
    <div className='page-size'>
      <div className="container">
      <div className="text1 title text-center">
        <h1>Affiliations and Credentials</h1>
      </div>
      <div>
        <ul className="pdf-list">
          {pdfs.map((pdf, index) => (
            <li key={index}>
              <span className="pdf-name">{pdf.title}</span>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-pdf-link"
              >
                View PDF
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>

  )
}

export default Documents
