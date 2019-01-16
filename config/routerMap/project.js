module.exports = {
    'POST /project/create':                           { action: 'Project/createProject'},
    'DELETE /project/delete/:id':                     { action: 'Project/deleteProject' },
    'POST /project/update':                           { action: 'Project/updateProdById' },
    "GET /project/getProdById" :                  { action: 'Project/getProdById'},
    "GET /project/getProdByPersonId/:dutyId" :        { action: 'Project/getProdByPersonId'},
    "GET /project/search" :                           { action: 'Project/getProdList'}
}