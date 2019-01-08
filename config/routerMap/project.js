module.exports = {
    'POST /project/create':                           { action: 'Project/createProject'},
    'DELETE /project/delete/:id':                     { action: 'Project/deleteProject' },
    'POST /project/update':                           { action: 'Project/updateProdById' },
    "GET /project/getProdById/:id" :                  { action: 'Project/getProdById'},
    "GET /project/getProdByPersonId/:dutyId" :        { action: 'Project/getProdByPersonId'},
    "GET /project/getProdByAreaId/:areaId" :          { action: 'Project/getProdByAreaId'}
}