module.exports = {
    getCompanyList:  (req, res) => {
        const db = req.app.get('db');  
        const companies = db.admin_get_all_companies();
        console.log( "Company List:", companies)
        res.sendStatus(200).send(companies)
    },
    
    viewProfile: (req, res) => {

    }
}