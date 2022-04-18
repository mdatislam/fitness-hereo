import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-2'>
           <strong className='text-primary'>Q1: Difference between authorization and authentication ?</strong>
           <p>-একটি প্রতিষ্ঠানে কর্মচারীদের আইডি এবং পাসওয়ার্ড যাচাই এবং নিশ্চিত করার প্রক্রিয়াটিকে Authentication বলা হয়,  আর কোন কর্মচারীর কোন ফ্লোরে বা কোথায় কোথায়  অ্যাক্সেস রয়েছে তা নির্ধারণ করাকে Authorzation  বলা হয়।</p> <br />
           <strong className='text-primary'>Q2: Why are you using firebase? What other options do you have to implement authentication?</strong>
           <p> To get secure access to a database directly from client-side code.</p>
           <p>There are may option to implement authentication such as secrete PIN, ards, retina scans, voice recognition, and fingerprints.</p><br />
           <strong className='text-primary'> Q3: What other services does firebase provide other than authentication ?</strong>
           <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards. </p>

        </div>
    );
};

export default Blog;