import React from 'react'

const Project4 = () => {
  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col justify-center items-center ">
      <div className="max-w-4xl mx-auto p-0 md:p-6 shadow-lg rounded-lg secondary-color">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white rounded-lg">Security Audit Report</h1>
        
        <h2 className="text-xl font-semibold mb-2">Controls Assessment Checklist</h2>
        <p className="mb-4">Select “yes” or “no” to answer the question: Does Botium Toys currently have this control in place?</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Controls Assessment Checklist</h3>
        <table className="min-w-full bg-fourth-color mb-4 text-center">
          <thead>
            <tr className='bg-tertiary-color tertiary-color'>
              <th className="py-2">Yes</th>
              <th className="py-2">No</th>
              <th className="py-2">Control</th>
              <th className="py-2">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Least Privilege</td>
              <td className="py-2">Currently, all employees have access to customers' data. Privileges need to be limited to reduce the risk of potential breach.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Disaster Recovery Plans</td>
              <td className="py-2">The company has no disaster recovery plans. This needs to be implemented to ensure business continuity.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Password Policies</td>
              <td className="py-2">Password policy exists but it is not fully secured. It needs to have strict requirements to reduce the risk that threat actors may access customers' private data.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Separation of Duties</td>
              <td className="py-2">This needs to be implemented to reduce the possible illegal access to critical data since most of the access to critical data runs by the company CEO.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Firewall</td>
              <td className="py-2">The existing firewall blocks traffic based on an appropriately defined set of security rules.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Intrusion Detection System (IDS)</td>
              <td className="py-2">There is no intrusion detection system installed. This needs to be installed to monitor potential security breach in the company systems.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Backups</td>
              <td className="py-2">The company needs to have backups of critical data to ensure business continuity in case of security breach.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Antivirus Software</td>
              <td className="py-2">The existing antivirus is regularly monitored by the IT department.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Manual Monitoring, Maintenance, and Intervention for Legacy Systems</td>
              <td className="py-2">Currently there is no regular schedule for monitoring and maintenance of legacy systems and there is no clear intervention method to be used. These need to be implemented to properly secure and reduce potential breach in these systems.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Encryption</td>
              <td className="py-2">Encryption is not currently used. Implementing this feature could improve the confidentiality of customer information.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Password Management System</td>
              <td className="py-2">There is no password management system that reduces the productivity of employees and vendors where they can recover and reset a password instead of submitting a ticket to the IT department.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Locks (Offices, Storefront, Warehouse)</td>
              <td className="py-2">The company has sufficient locks installed.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Closed-circuit television (CCTV) Surveillance</td>
              <td className="py-2">Up-to-date Closed-circuit television surveillance installed.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Fire Detection/Prevention (Fire Alarm, Sprinkler System, etc.)</td>
              <td className="py-2">The company has well-functioning fire detection and prevention systems installed.</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Compliance Checklist</h3>
        <p className="mb-4">Select “yes” or “no” to answer the question: Does Botium Toys currently adhere to this compliance best practice?</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Payment Card Industry Data Security Standard (PCI DSS)</h3>
        <table className="min-w-full bg-fourth-color mb-4 text-center">
          <thead>
            <tr className='bg-tertiary-color tertiary-color'>
              <th className="py-2">Yes</th>
              <th className="py-2">No</th>
              <th className="py-2">Best Practice</th>
              <th className="py-2">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">The organization maintains a secure network to store cardholder data.</td>
              <td className="py-2">The company does not secure customers’ credit card information and is not encrypted.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Access is restricted to cardholder data.</td>
              <td className="py-2">All employees have access to customers credit card information.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Data is encrypted at rest and in transit.</td>
              <td className="py-2">Customers data is not encrypted.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Vulnerability scans are regularly performed.</td>
              <td className="py-2">The company does not have vulnerability scans regularly performed to identify potential security gaps.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Maintain and regularly update the system’s antivirus software.</td>
              <td className="py-2">The company’s antivirus is not updated regularly which makes the system vulnerable.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Track and monitor access to network resources and cardholder data.</td>
              <td className="py-2">The company does not have an active monitoring and tracking system.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Maintain an information security policy.</td>
              <td className="py-2">The company does not have an information security policy established.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">The company’s password policy does not require secure password requirements.</td>
              <td className="py-2">The company’s password policy does not require secure password requirements.</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="text-lg font-semibold mb-2 text-white">General Data Protection Regulation (GDPR)</h3>
        <table className="min-w-full bg-fourth-color mb-4 text-center">
          <thead>
            <tr className='bg-tertiary-color tertiary-color'>
              <th className="py-2">Yes</th>
              <th className="py-2">No</th>
              <th className="py-2">Best Practice</th>
              <th className="py-2">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">E.U. customers’ data is kept private/secured.</td>
              <td className="py-2">All employees have access to customers data and credit card information is not encrypted.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">There is a plan in place to notify E.U. customers within 72 hours if their data is compromised/there is a breach.</td>
              <td className="py-2">The company has established a plan to notify E.U. customers within 72 hours if there is a security breach.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Ensure data is properly classified and inventoried.</td>
              <td className="py-2">All assets have been inventoried/listed but not classified.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Enforce privacy policies, procedures, and processes to properly document and maintain data.</td>
              <td className="py-2">Privacy policies and processes have been developed and enforced among company employees to properly document and maintain data.</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="text-lg font-semibold mb-2 text-white">System and Organizations Controls (SOC type 1, SOC type 2)</h3>
        <table className="min-w-full bg-fourth-color mb-4 text-center">
          <thead>
            <tr className='bg-tertiary-color tertiary-color'>
              <th className="py-2">Yes</th>
              <th className="py-2">No</th>
              <th className="py-2">Best Practice</th>
              <th className="py-2">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">User access policies are established.</td>
              <td className="py-2">The company does not establish user access policies which gives high risk of potential access to critical data.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Sensitive data (PII/SPII) is confidential/private.</td>
              <td className="py-2">All employees have access to sensitive data.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">Data integrity ensures the data is consistent, complete, accurate, and has been validated.</td>
              <td className="py-2">The company ensured availability and integrated controls to ensure data integrity.</td>
            </tr>
            <tr>
              <td className="py-2">
                <input type="checkbox" disabled />
              </td>
              <td className="py-2">
                <input type="checkbox" disabled checked class="form-checkbox text-green-500"/>
              </td>
              <td className="py-2">Data is available to individuals authorized to access it.</td>
              <td className="py-2">Data is available to all employees.</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Recommendations (optional)</h3>
        <p className="mb-4">In this section, provide recommendations, related to controls and/or compliance needs, that your IT manager could communicate to stakeholders to reduce risks to assets and improve Botium Toys’ security posture.</p>
        <ul className="list-disc list-inside mb-4">
          <li>To address security controls issues, we need to implement confidentiality of the organization’s assets such as customers’ private data. Implementing data encryption both at rest and in transit should also be considered.</li>
          <li>Reviewing the current password policy and its implementation by applying strict requirements could also increase security in the company’s systems.</li>
          <li>Installing an Intrusion Detection System to identify potential breaches and notify the IT department could improve our monitoring capabilities.</li>
          <li>Implementing a password management system would increase productivity by reducing the number of IT tickets for password recovery.</li>
          <li>Separation of duties should be enforced to limit access to critical data to only those who need it.</li>
          <li>We need to develop and enforce user access policies to limit access to sensitive data only to authorized individuals.</li>
          <li>Regular vulnerability scans should be conducted to identify and address potential security gaps.</li>
        </ul>
      </div>
    </div>
  )
}

export default Project4