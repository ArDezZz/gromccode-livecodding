import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = props => {
  //input: any
  //ouput: array [any, func]
  const [userInfo, setUserInfo] = useState({
    avatarUrl: null,
    location: null,
    name: null,
  });
  const { userId } = useParams();
  // const userId = props.match.params.userId;
  console.log('User props', props.match.params.userId);
  //input:callback, array
  //output:undefined
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setUserInfo({
          avatarUrl: res.avatar_url,
          location: res.location,
          name: res.name,
        });
      });
  }, [userId]);

  const { avatarUrl, location, name } = userInfo;

  if (!avatarUrl === null) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
