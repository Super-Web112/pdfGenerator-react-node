module.exports = ({ attempts, proc_name, side, vein, fac_name, cath_size, cath_lumens, case_number, internal_cm, extern_cm, dob, f_name, l_name, tip_confirm, quality, f_name1, l_name1, prod_lot, proc_note, proc_time, signature }) => {
    const today = new Date();
    return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #eee;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                    font-size: 16px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica',
                    color: #555;
                }
                .margin-top {
                    margin-top: 50px;
                }
                .justify-center {
                    text-align: center;
                }
                .invoice-box table {
                    width: 100%;
                    line-height: inherit;
                    text-align: center;
                }
                .invoice-box table td {
                    padding: 5px;
                    vertical-align: middle;
                }
                .invoice-box table tr td:nth-child(2) {
                    text-align: center;
                }
                .invoice-box table tr.top table td {
                    padding-bottom: 0px;
                }
                .invoice-box table tr.top table td.title {
                    font-size: 45px;
                    line-height: 45px;
                    color: #333;
                    text-align: left;
                }
                .invoice-box table tr.information table td {
                    padding-bottom: 40px;
                }
                .invoice-box table tr.odd td {
                    background: #eee;
                    border-bottom: 1px solid #ddd;
                    font-weight: bold;
                }
                .invoice-box table tr.details td {
                    padding-bottom: 20px;
                }
                .invoice-box table tr.even td {
                    border-bottom: 1px solid #eee;
                }
                .invoice-box table tr.even.last td {
                    border-bottom: none;
                }
    
                
                .invoice-box>table>tbody>tr.even>td:first-child {
                    width: 40%;
                    border-right: 1px solid #ddd;
                }
                
                .invoice-box>table>tbody>tr.odd>td:first-child {
                    width: 40%;
                    border-right: 1px solid #ddd;
                }
                
                .invoice-box>table>tbody>tr.even>td:last-child {
                    width: 30%;
                    border-left: 1px solid #ddd;
                }
                
                .invoice-box>table>tbody>tr.odd>td:last-child {
                    width: 30%;
                    border-left: 1px solid #ddd;
                }
    
                .invoice-box table tr.total td:nth-child(2) {
                    border-top: 2px solid #eee;
                    font-weight: bold;
                }
    
                .header-static{
                    text-align: left;
                    padding-left: 100px;
                }
    
                input{
                    height: 30px;
                }
    
                @media only screen and (max-width: 600px) {
                    .invoice-box table tr.top table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }
                    .invoice-box table tr.information table td {
                        width: 100%;
                        display: block;
                        text-align: center;
                    }
                }
            </style>
        </head>
        <body>
            <div class="invoice-box">
                <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                        <td colspan="3">
                            <table>
                                <tr>
                                    <td class="title"><img src="https://zolve.com/static/images/zolve_logo.svg" style="margin-left: 50px;" /></td>
                                    <td>
                                        <table>
                                            <tr><td class="header-static"><span style="font-weight: bold; color: #4c8c12">Phone:</span> +1 625421554</td></tr>
                                            <tr><td class="header-static"><span style="font-weight: bold; color: #4c8c12">Fax:</span> example@mail.com</td></tr>
                                            <tr><td class="header-static"><span style="font-weight: bold; color: #4c8c12">Email:</span>example@mail.com</td></tr>
                                            <tr><td class="header-static"><span style="font-weight: bold; color: #4c8c12">Order Online:</span> On</td></tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    </tr>
                    <tr class="odd">
                        <td>Procedure</td>
                        <td>Attempts</td>
                        <td> ${attempts} </td>
                    </tr>
                    <tr class="even">
                        <td>${proc_name} </td>
                        <td>Side</td>
                        <td> ${side} </td>
                    </tr>
                    <tr class="odd">
                        <td>Facility</td>
                        <td>Vein</td>
                        <td>${vein} </td>
                    </tr>
                    <tr class="even">
                        <td>${fac_name} </td>
                        <td>Catheter Size</td>
                        <td> ${cath_size} </td>
                    </tr>
                    <tr class="odd">
                        <td>Case Number</td>
                        <td>Catheter Lumens</td>
                        <td>${cath_lumens} </td>
                    </tr>
                    <tr class="even">
                        <td>${case_number} </td>
                        <td>Internal CM</td>
                        <td> ${internal_cm} </td>
                    </tr>
                    <tr class="odd">
                        <td>Patient</td>
                        <td>External CM</td>
                        <td>${extern_cm} </td>
                    </tr>
                    <tr class="even">
                        <td>
                            <table>
                                <tr>
                                    <td>DOB</td>
                                    <td>Frist Name</td>
                                    <td>Last Name</td>
                                </tr>
                                <tr>
                                    <td>${dob}</td>
                                    <td>${f_name}</td>
                                    <td>${l_name}</td>
                                </tr>
                            </table>
                        </td>
                        <td>Tip Confirmation</td>
                        <td> ${tip_confirm} </td>
                    </tr>
                    <tr class="odd">
                        <td>Assigned Staff</td>
                        <td>Quality</td>
                        <td>${quality}</td>
                    </tr>
                    <tr class="even">
                        <td>
                            <table>
                                <tr>
                                    <td>Frist Name</td>
                                    <td>Last Name</td>
                                </tr>
                                <tr>
                                    <td>${f_name1}</td>
                                    <td>${l_name1}</td>
                                </tr>
                            </table>
                        </td>
                        <td>Product Lot #</td>
                        <td> ${prod_lot}</td>
                    </tr>
                    <tr class="odd">
                        <td>Procedure Time</td>
                        <td>Procedure Notes</td>
                        <td>${proc_note} </td>
                    </tr>
                    <tr class="even">
                        <td>${proc_time}</td>
                        <td>Signature</td>
                        <td>${signature}</td>
                    </tr>
                </table>
                <br />
            </div>
        </body>
    </html>
        `;
};