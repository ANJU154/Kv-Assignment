import express from "express";
import NotAuthorizedException from "../exception/NotAuthorizedException";
import RequestWithUser from "../util/rest/request";
import jsonwebtoken from "jsonwebtoken";
import APP_CONSTANTS from "../constants";

const authorizeadmin = () => {
 return async (
   req: RequestWithUser,
   res: express.Response,
   next: express.NextFunction
 ) => {
   try {
    const token = getTokenFromRequestHeader(req);
    jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
    const decoded = jsonwebtoken.decode(token)
    const payLoadString = JSON.stringify(decoded);
    console.log(JSON.parse(payLoadString).customRole);
    console.log(typeof(jsonwebtoken.decode(token)))
    if(JSON.parse(payLoadString).customRole !=3){
     throw next(new NotAuthorizedException())
    }
    return next();
  } catch (error) {
    return next(new NotAuthorizedException());
  }
};
};
const getTokenFromRequestHeader = (req: RequestWithUser) => {
   const tokenWithBearerHeader = req.header(
     `${APP_CONSTANTS.authorizationHeader}`
   );
   if (tokenWithBearerHeader) {
     return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, "");
   }
   return "";
  };
export default authorizeadmin;