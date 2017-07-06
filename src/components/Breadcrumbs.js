import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import UserBreadcrumb from './user/UserBreadcrumb';

const routeMap = {
  '/': 'Home',
  '/users': 'Users',
  '/users/new': 'New',
  '/users/:id': (id) => <UserBreadcrumb id={id} />,
  '/users/:id/edit': 'Edit',
  '/users/:id/addresses': 'Addresses',
  '/vehicles': 'Vehicles',
  '/vehicles/:id': 'Vehicle Details'
};

const getPaths = (pathname) => {
  const paths = ['/'];
  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const isNumber = (str) => !isNaN(parseInt(str, 0));

const findRouteName = (pathname) => {
  const dynamicParams = [];
  const pathPattern = pathname.split("/").map(piece => {
  	if (isNumber(piece)) {
      dynamicParams.push(piece);
  		return ":id";
  	}
  	else {
  		return piece;
  	}
  }).join("/");

  const matchingRoute = routeMap[pathPattern];

  if (typeof matchingRoute === 'function') {
    return matchingRoute.apply(this, dynamicParams);
  } else {
    return matchingRoute;
  }

}

const BreadcrumbItem = ({ match }) => {
  const routeName = findRouteName(match.url);

  if (!routeName) return null;

  return (
    match.isExact ? (
      <li>{routeName}</li>
    ) : (
      <li><Link to={match.url}>{routeName}</Link></li>
    )
  );
};

const Breadcrumbs = ({ location }) => {
  const paths = getPaths(location.pathname);

  return (
    <ol className="breadcrumb" style={{marginTop: '88px'}}>
      {paths.map(path => (
        <Route path={path} component={BreadcrumbItem} key={path} />
      ))}
    </ol>
  );
};

export default withRouter(Breadcrumbs);
