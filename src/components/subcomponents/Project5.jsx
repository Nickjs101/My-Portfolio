import React from 'react'

const Project5 = () => {
  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto p-0 md:p-6 shadow-lg rounded-lg secondary-color">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white rounded-lg">Incident Report Analysis</h1>

        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="mb-4">
          The company recently experienced a DDOS attack that compromised the internal network for two hours until it was resolved. During the attack the organization’s network services suddenly stopped responding due to an incoming flood of ICMP packets. Normal internal network traffic could not access any network resources.
        </p>

        <h2 className="text-xl font-semibold mb-2">Identify</h2>
        <p className="mb-4">
          The company’s cybersecurity team then investigated the security event. They found out that a malicious actor had sent a flood of ICMP pings into the company’s network through an unconfigured firewall. This vulnerability allowed a malicious attacker to overwhelm the company’s network through a distributed denial of service (DDoS) attack.
        </p>

        <h2 className="text-xl font-semibold mb-2">Protect</h2>
        <p className="mb-4">
          To address this security event the network security team implemented:
          <ul className="list-disc ml-6">
            <li>A new firewall rule to limit the rate of incoming ICMP packets</li>
            <li>Source IP address verification on the firewall to check for spoofed IP addresses on incoming ICMP packets</li>
            <li>An IDS/IPS system to filter out some ICMP traffic based on suspicious characteristics</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2">Detect</h2>
        <p className="mb-4">
          To detect abnormal traffic patterns the team will implement network monitoring software.
        </p>

        <h2 className="text-xl font-semibold mb-2">Respond</h2>
        <p className="mb-4">
          The incident management team responded by blocking incoming ICMP packets to neutralize the attack and stopping all non-critical network services offline.
        </p>

        <h2 className="text-xl font-semibold mb-2">Recover</h2>
        <p className="mb-4">
          After managing the attack the team restored critical network services to normal.
        </p>

        <h2 className="text-xl font-semibold mb-2">Reflections/Notes</h2>
        <p className="mb-4">
          <strong>Image Format:</strong> Portable Network Graphic (PNG)
          <br />
          <strong>Bits Per Pixel:</strong> 32
          <br />
          <strong>Color:</strong> Truecolour with alpha
          <br />
          <strong>Dimensions:</strong> 1865 x 2048
          <br />
          <strong>Interlaced:</strong> Yes
        </p>
      </div>
    </div>
  )
}

export default Project5