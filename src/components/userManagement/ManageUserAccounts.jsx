import React from "react";
import {Table, TableBody, TableContainer, TableHead, TableRow, withStyles} from "@material-ui/core";
import * as PropTypes from "prop-types";


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageUserAccounts(props){

        return <div>
                <table>
                    <thead>
                        <tr>
                            <td>Dessert</td>
                            <td align="right">Calories</td>
                            <td align="right">Fat</td>
                            <td align="right">Carbs</td>
                            <td align="right">Protein</td>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td component="th" scope="row">
                                </td>
                                <td align="right">row.calories</td>
                                <td align="right">row.fat</td>
                                <td align="right">row.carbs</td>
                                <td align="right">row.protein</td>
                            </tr>
                    </tbody>
                </table>
        </div>



}

export default ManageUserAccounts;