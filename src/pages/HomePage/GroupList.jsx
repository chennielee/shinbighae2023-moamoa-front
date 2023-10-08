import React from "react";
import * as S from "./GroupList.style";

const GroupList = ({ groupData }) => {
  const additionalGroupData = [
    {
      profit: "-10%",
      aim: "80",
    },
    {
      profit: "+5%",
      aim: "60",
    },
    {
      profit: "+20%",
      aim: "50",
    },
  ];

  let i = 0;
  for (let index in groupData) {
    groupData[index].profit = additionalGroupData[i].profit;
    groupData[index].aim = additionalGroupData[i].aim;
    i++;
  }

  return (
    <div>
      {groupData &&
        groupData.map((group) => (
          <S.Group key={group.meetingId}>
            <S.GroupTitle>
              <S.GroupTitleName>{group.meetingName}</S.GroupTitleName>
              <S.IsGroup>모임</S.IsGroup>
            </S.GroupTitle>

            <S.GroupProfit>
              <S.ProfitIntro>수익률</S.ProfitIntro>
              {group.profit.charAt(0) === "+" ? (
                <S.ProfitNumPositive>{group.profit}</S.ProfitNumPositive>
              ) : (
                <S.ProfitNumNegative>{group.profit}</S.ProfitNumNegative>
              )}
            </S.GroupProfit>
            <S.GroupAim>
              <S.GroupAimIntro>목표 달성률</S.GroupAimIntro>
              <S.GroupAimPercentage>
                <S.GroupAimPercentageMove
                  style={{ marginLeft: `${group.aim}px` }}
                ></S.GroupAimPercentageMove>
              </S.GroupAimPercentage>
            </S.GroupAim>
          </S.Group>
        ))}
    </div>
  );
};

export default GroupList;
