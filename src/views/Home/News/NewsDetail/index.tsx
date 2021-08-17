import React from "react";
import qs from "qs";

interface Props {
  location: any;
}

const NewsDetail = (props: Props) => {
  const { search } = props.location;
  console.log(qs.parse(search.slice(1))); // {'id':1 }
  const params = qs.parse(search.slice(1));
  return <div>news {params.id}</div>;
};

export default NewsDetail;
