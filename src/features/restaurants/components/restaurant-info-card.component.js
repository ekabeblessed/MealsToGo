import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 20px
background-color: white
`;

const Title = styled.Text`
  padding: 16px
  color: black
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hello There",
    icon,
    photos = [
      "https://pbs.twimg.com/profile_images/1312176923477446682/rhmjKGBF_400x400.jpg",
    ],
    address = "Molyko Buea",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
