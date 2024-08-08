import React from 'react'
import Linux1 from '../../assets/Linux/Picture1.png'
import Linux2 from '../../assets/Linux/Picture2.png'
import Linux3 from '../../assets/Linux/Picture3.png'
import Linux4 from '../../assets/Linux/Picture4.png'
import Linux5 from '../../assets/Linux/Picture5.png'

const Project1 = () => {
  return (
    <div className=" font-sans leading-relaxed tracking-wide flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto p-0 md:p-6 shadow-lg rounded-lg secondary-color">
        
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white rounded-lg">File Permissions in Linux</h1>
        <h2 className="text-xl font-semibold mb-2">Project Description</h2>
        <p className="mb-4 ">In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Check File and Directory Details</h3>
        <p className="mb-4 ">For checking file and directory details, I used the <code className="bg-fourth-color rounded px-2 py-1">ls -la</code> command to display files and directories including their permissions and owner. The <code className="bg-fourth-color rounded px-2 py-1">ls</code> command lists all contents of the directory, which in this case is the projects directory, and the <code className="bg-fourth-color rounded px-2 py-1">-la</code> options include hidden files and their permissions.</p>
        <img src={Linux1} alt="Project" className="w-full h-auto mb-6 rounded-lg"/>
        <img src={Linux2} alt="Project" className="w-full h-auto mb-6 rounded-lg"/>
        <h3 className="text-lg font-semibold mb-2 text-white">Describe the Permissions String</h3>
        <p className="mb-4 ">In the first column, the 10-character string represents the permissions of the owner, group, and other users for the file or directory. The first character represents the type: <code className="bg-fourth-color rounded px-2 py-1">d</code> means it is a directory and <code className="bg-fourth-color rounded px-2 py-1">-</code> hyphen means it is a regular file.</p>
        <p className="mb-4 ">The 2nd-4th characters represent the permissions the owner has. The 5th-7th characters are for the group, and the 8th-10th characters are for other users in the system. Each user has three permissions represented by <code className="bg-fourth-color rounded px-2 py-1">r</code> for read, <code className="bg-fourth-color rounded px-2 py-1">w</code> for write, and <code className="bg-fourth-color rounded px-2 py-1">x</code> for execute. If the permission is represented by a <code className="bg-fourth-color rounded px-2 py-1">-</code> hyphen, it means that the user has no permission.</p>
        <p className="mb-4 ">For example, in the <code className="bg-fourth-color rounded px-2 py-1">.project_x.txt</code> file, the owner (researcher2) has read and write permissions while the group (research_team) has only write permission and no permission for other users.</p>

        <h3 className="text-lg font-semibold mb-2 text-white">Change File Permissions</h3>
        <p className="mb-4 ">The organization does not allow other users to have write access to any file. In this case, <code className="bg-fourth-color rounded px-2 py-1">project_k.txt</code> has <code className="bg-fourth-color rounded px-2 py-1">w</code> in the 9th character, which gives other users write access to the file. To remove write permission, I used the command <code className="bg-fourth-color rounded px-2 py-1">chmod o-w project_k.txt</code>. The <code className="bg-fourth-color rounded px-2 py-1">chmod</code> command modifies the permissions of the file. The <code className="bg-fourth-color rounded px-2 py-1">o-w</code> part of the command means to subtract or remove write permission for other users. At the end of the command, I provide the file for which I am changing the permission.</p>
        <img src={Linux3} alt="Project" className="w-full h-auto mb-6 rounded-lg"/>

        <h3 className="text-lg font-semibold mb-2 text-white">Change File Permissions on a Hidden File</h3>
        <p className="mb-4 ">The <code className="bg-fourth-color rounded px-2 py-1">project_x.txt</code> file has been archived by the research team, making it hidden. This file should not have write permissions for all users; only the owner and the group should have read permission. To achieve this, I used the command <code className="bg-fourth-color rounded px-2 py-1">chmod ug=r .project_x.txt</code>. In this command, <code className="bg-fourth-color rounded px-2 py-1">ug=r</code> sets read-only permissions for the owner and the group.</p>
        <img src={Linux4} alt="Project" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Change Directory Permissions</h3>
        <p className="mb-4 ">All files and directories in the projects directory belong to the user <code className="bg-fourth-color rounded px-2 py-1">researcher2</code>. Only <code className="bg-fourth-color rounded px-2 py-1">researcher2</code> should have access to the drafts directory. To remove the execute permission for the group in the drafts directory, I used the command <code className="bg-fourth-color rounded px-2 py-1">chmod g-x drafts</code>. This command removes the execute permission for the group, restricting their access to the directory.</p>
        <img src={Linux5} alt="Project" className="w-full h-auto mb-6 rounded-lg"/>

        <h3 className="text-lg font-semibold mb-2 text-white">Summary</h3>
        <p className="mb-4 ">First, I used the <code className="bg-fourth-color rounded px-2 py-1">ls -la</code> command to check for appropriate and unauthorized permissions. Then, with the use of the <code className="bg-fourth-color rounded px-2 py-1">chmod</code> command, I modified the permissions of the files and directories according to the organization’s policies and user requirements. These steps help keep the system safe from unauthorized access.</p>
      </div>
    </div>
  )
}

export default Project1
