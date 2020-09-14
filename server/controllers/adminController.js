module.exports = {
    getCompanyList: async (req, res) => {
        const db = req.app.get('db');  
        const companies = await db.admin_get_all_companies();
        // console.log( "Company List:", companies)
        res.status(200).send(companies)
    },
    
    viewProfile: (req, res) => {

    }
}