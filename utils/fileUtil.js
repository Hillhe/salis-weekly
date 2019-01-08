module.exports = {
    rowCenter(arg_ws, arg_start, arg_end) {
        for (i = arg_start; i <= arg_end; i++) {
            arg_ws.findRow(i).alignment = { vertical: 'middle', horizontal: 'center' };
            arg_ws.findRow(i).eachCell(function (cell, index) {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            })
    
        }
    },
    colWidth(arg_ws, arg_cols, arg_width) {
        for (i in arg_cols) {
            arg_ws.getColumn(arg_cols[i]).width = arg_width;
        }
    }
}