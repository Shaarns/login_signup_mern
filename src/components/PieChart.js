import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import 'charts.css';
import './style.css';

const PieChart = () => {
  return (
    <Grid container justifyContent='space-between'>
      <Grid item xs={12} sm={6}>
        <table id='bar-example-8' className='charts-css bar show-labels'>
          <thead>
            <tr>
              <th scope='col'> Year </th> <th scope='col'> Progress </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'> 2016 </th> <td style={{ '--size': 0.2 }}></td>
            </tr>
            <tr>
              <th scope='row'> 2017 </th> <td style={{ '--size': 0.4 }}></td>
            </tr>
            <tr>
              <th scope='row'> 2018 </th> <td style={{ '--size': 0.6 }}></td>
            </tr>
            <tr>
              <th scope='row'> 2019 </th> <td style={{ '--size': 0.8 }}></td>
            </tr>
            <tr>
              <th scope='row'> 2020 </th> <td style={{ '--size': 1 }}></td>
            </tr>
          </tbody>
        </table>
        <Typography variant='body1' align='center'>
          Growth
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <table
          id='area-example-10'
          class='charts-css area multiple hide-data show-labels'
        >
          <thead>
            <tr>
              <th scope='col'> Year </th> <th scope='col'> Progress 1 </th>
              <th scope='col'> Progress 2 </th>
              <th scope='col'> Progress 3 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'> 2000 </th>
              <td style={{ '--start': 0.1, '--size': 0.5 }}>
                <span class='data'> 50 </span>
              </td>
              <td style={{ '--start': 0, '--size': 0.2 }}>
                <span class='data'> 20 </span>
              </td>
              <td style={{ '--start': 0.2, '--size': 0.4 }}>
                <span class='data'> 40 </span>
              </td>
            </tr>
            <tr>
              <th scope='row'> 2010 </th>
              <td style={{ '--start': 0.5, '--size': 0.8 }}>
                <span class='data'> 80 </span>
              </td>
              <td style={{ '--start': 0.2, '--size': 0.5 }}>
                <span class='data'> 50 </span>
              </td>
              <td style={{ '--start': 0.4, '--size': 0.1 }}>
                <span class='data'> 10 </span>
              </td>
            </tr>
            <tr>
              <th scope='row'> 2020 </th>
              <td style={{ '--start': 0.8, '--size': 0.4 }}>
                <span class='data'> 40 </span>
              </td>
              <td style={{ '--start': 0.5, '--size': 0.3 }}>
                <span class='data'> 30 </span>
              </td>
              <td style={{ '--start': 0.1, '--size': 0.2 }}>
                <span class='data'> 20 </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Typography variant='body1' align='center'>
          Growth
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PieChart;
