import { Dashparameters } from '../components/Dashparameters';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { useVisuals } from '../contexts/Visualcontext';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';
import { Bargraphblock } from '../components/summary/Bargraphblock';
import { Linegraphblock } from '../components/summary/Linegraphblock';
import { chartarray } from '../sampledata/data';
import { Areagraphblock } from '../components/summary/Areagraphblock';
import { Scattergraphblock } from '../components/summary/Scattergraphblock';
import { color1, color2, color3 } from '../color';
import {Piegraphsumblock} from '../components/Piegraphsum';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export function Hompage() {
  const { dateval, setDateval, enddateval, setEnddateval } = useVisuals();
  const theme = createTheme({
    typography: {
      htmlFontSize: 10,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            fontSize: '62.5%',
          },
        },
      },
    },
  });

  return (
    <div className='dcontainer'>
      <Sidenavv3 />
      <div className='homemainv2'>
        <Topbarv3 />
        <div className='homemaincontentv2'>
          <h1 id='introjs__1' className='homemainheaderv2'>
            <span className='introjs__1'>Summary</span>
          </h1>
          <>
            <Dashparameters />
            <div className='summaryparams'>
              <div className='summaryparam'>
                <p className='summaryparam__title'>
                  Total number of <br />
                  kilometers travelled
                </p>
                <p className='summaryparam__value'>23392 kms</p>
              </div>
              <div className='summaryparam'>
                <p className='summaryparam__title'>
                  Total number of
                  <br /> electricity consumed
                </p>
                <p className='summaryparam__value'>19000 KWh </p>
              </div>
              {/* <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div> */}
            </div>
            <div className='datefilters'>
              <h3 className='datefilters__head'>Date Filters</h3>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    minDate='2022-1-1'
                    maxDate='2022-12-31'
                    label='Start date'
                    inputFormat='MM/DD/YYYY'
                    value={dayjs(dateval)}
                    onChange={(newValue) => {
                      const monthkey = JSON.stringify(newValue['$M'] + 1);
                      const monthkeystring =
                        monthkey.length === 1 ? `0${monthkey}` : monthkey;
                      setDateval(
                        `${newValue['$y']}-${monthkeystring}-${newValue['$D']}`
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <DesktopDatePicker
                    minDate='2022-1-1'
                    maxDate='2022-12-31'
                    label='End date'
                    inputFormat='MM/DD/YYYY'
                    value={dayjs(enddateval)}
                    onChange={(newValue) => {
                      const monthkey = JSON.stringify(newValue['$M'] + 1);
                      const monthkeystring =
                        monthkey.length === 1 ? `0${monthkey}` : monthkey;
                      setEnddateval(
                        `${newValue['$y']}-${monthkeystring}-${newValue['$D']}`
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </ThemeProvider>
            </div>

            <div className='homevizgraph__cont'>
              <div className='summarygrid'>
                <Linegraphblock
                  vizarray={chartarray}
                  graphname={'Air Travel'}
                  colorvalue={color1}
                />
                <Piegraphsumblock />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={'Road Travel'}
                  colorvalue={color1}
                />
                <Areagraphblock
                  vizarray={chartarray}
                  graphname={'Air Cargo'}
                  colorvalue={color1}
                />
                <Scattergraphblock
                  vizarray={chartarray}
                  graphname={'Road Cargo'}
                  colorvalue={color1}
                />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={'Electricity'}
                  colorvalue={color2}
                />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={'Refrigeration'}
                  colorvalue={color3}
                />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={'Delivery'}
                  colorvalue={color3}
                />
              </div>
            </div>
          </>
          <Lowsootfooter />
        </div>
      </div>
    </div>
  );
}
