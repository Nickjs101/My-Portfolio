import React from 'react'

const Project3 = () => {
  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col justify-center items-center">
      <div className="w-full mx-auto p-0 md:p-6 shadow-lg rounded-lg secondary-color">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white rounded-lg">Vulnerability Assessment Report</h1>
        
        <h2 className="text-xl font-semibold mb-2">1st January 20XX</h2>
        
        <h3 className="text-lg font-semibold mb-2 text-white">System Description</h3>
        <p className="mb-4">
          The server hardware consists of a powerful CPU processor and 128GB of memory. It runs on the latest version of Linux operating system and hosts a MySQL database management system. It is configured with a stable network connection using IPv4 addresses and interacts with other servers on the network. Security measures include SSL/TLS encrypted connections.
        </p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Scope</h3>
        <p className="mb-4">
          The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.
        </p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Purpose</h3>
        <p className="mb-4">
          The database server is a centralized computer system that stores and manages a large amount of data. The server is used to store customer campaign and analytic data that can later be analyzed to track performance and personalize marketing efforts. It is important to secure the system because of its regular use for marketing operations.
        </p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Risk Assessment</h3>
        <div className='overflow-x-auto'>
          <table className="min-w-full bg-fourth-color mb-4 text-center">
            <thead>
              <tr className='bg-tertiary-color tertiary-color'>
                <th className="py-2">Threat Source</th>
                <th className="py-2">Threat Event</th>
                <th className="py-2">Likelihood</th>
                <th className="py-2">Severity</th>
                <th className="py-2">Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Hacker</td>
                <td className="py-2">Obtain sensitive information via exfiltration</td>
                <td className="py-2">3</td>
                <td className="py-2">3</td>
                <td className="py-2">9</td>
              </tr>
              <tr>
                <td className="py-2">Employee</td>
                <td className="py-2">Accidentally alter data and disrupt operations</td>
                <td className="py-2">2</td>
                <td className="py-2">3</td>
                <td className="py-2">6</td>
              </tr>
              <tr>
                <td className="py-2">Customer</td>
                <td className="py-2">Alter or Delete customer information</td>
                <td className="py-2">1</td>
                <td className="py-2">3</td>
                <td className="py-2">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        
        <h3 className="text-lg font-semibold mb-2 text-white">Approach</h3>
        <p className="mb-4">
          Risks that were measured considered the data storage and management processes of the business. Potential threat sources and events were determined by using the likelihood of the security incident given that the database server is open to the public. The severity of the potential incidents was weighted against its impact on the day-to-day operational needs of the company.
        </p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Remediation Strategy</h3>
        <p className="mb-4">
          Implementation of authentication, authorization, and auditing mechanisms to ensure that only authorized users access the database server. This includes using strong passwords, role-based access controls, and multi-factor authentication to limit user privileges. Encryption of data in motion using TLS instead of SSL. IP allow-listing to corporate offices to prevent random users from the internet from connecting to the database.
        </p>
      </div>
    </div>
  )
}

export default Project3