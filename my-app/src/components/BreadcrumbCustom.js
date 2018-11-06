import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BreadcrumbCustom extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb className="breadcrumb-custom">
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Data</a></BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
};

export default BreadcrumbCustom;
