import React from 'react';
import './footer.css';

export default function Footer() {
  const myContact = () => {
    alert(
      'Name \t ' +
        '\n' +
        '     Md. Asad Chowdhary' +
        '\n' +
        "Father's Name \t" +
        '\n' +
        '     Taj Mohammad' +
        '\n' +
        "Mother's Name \t " +
        '\n' +
        '     Mst. Asma Khatun' +
        '\n' +
        'Present Address \t ' +
        '\n' +
        '     House 42, Road 01, Sector 09, ' +
        '\n' +
        '     Uttara, Dhaka - 1230' +
        '\n' +
        'Permanent Address  \t ' +
        '\n' +
        '     House 634, Pragpur (Sabtapara), ' +
        '\n' +
        '     Daulatpur, Kushtia - 7052' +
        '\n' +
        'Mobile Number  \t  ' +
        '\n' +
        '     01611-724728 (Personal), ' +
        '\n' +
        '     01638-945969 (Private)' +
        '\n' +
        'Running Student  \t  ' +
        '\n' +
        '     Asian University of  Bangladesh, ' +
        '\n' +
        '     Ashulia, Savar, Dhaka' +
        '\n' +
        'Current Job  \t ' +
        '\n' +
        '     Shahid Cadet Academy, ' +
        '\n' +
        '     Uttara, Dhaka' +
        '\n' +
        'Job Address  \t  ' +
        '\n' +
        '     House 33, Road 01, Sector 09, ' +
        '\n' +
        '     Uttara, Dhaka - 1230'
    );
  };

  return (
    <>
      <div className="footer" onClick={myContact}>
        Click for My Information
      </div>
      .
    </>
  );
}
