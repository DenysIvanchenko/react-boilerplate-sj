import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Grid } from "@material-ui/core";


// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

import {
  getAllDatas
} from '../../store/Actions/TempAction';
class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  eventHandler = () => {
    this.props.initialData(3);
    console.log(this.props);
  }
  render() {

    return (
      <>
        <PageTitle title="Typography" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Widget title="Headings" disableWidgetMenu>
              <div onClick={this.eventHandler}>
                Temp
              </div>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="Typography Colors" disableWidgetMenu>
              <div>
              </div>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="Basic Text Settings" disableWidgetMenu>
              <div>
              </div>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="Text Size" disableWidgetMenu>
              <div>
              </div>
            </Widget>
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initialData: (data) => dispatch(getAllDatas(data)),
});

const mapStateToProps = (datas) => ({
  data: datas
});
export default connect(mapStateToProps, mapDispatchToProps)(Temp)
