import React from "react";
import { withRouter } from "react-router-dom";
import { Result, Button } from "antd";
const NoMatchPage = props => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={props.history.goBack}>
          Back Home
        </Button>
      }
    />
  );
};

export default withRouter(NoMatchPage);
