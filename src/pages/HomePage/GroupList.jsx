import React from "react";
import * as S from "./GroupList.style";

const GroupList = ({ groupData }) => {
  return (
    <div>
      {groupData &&
        groupData.map((group) => (
          <S.Group key={group.id}>
            <S.GroupTitle>
              <S.GroupTitleName>{group.title}</S.GroupTitleName>
              <S.IsGroup>{group.isGroup}</S.IsGroup>
            </S.GroupTitle>

            <S.GroupProfit>
              <S.ProfitIntro>수익률</S.ProfitIntro>
              {group.profit.charAt(0) === "+" ? (
                <S.ProfitNumPositive>{group.profit}</S.ProfitNumPositive>
              ) : (
                <S.ProfitNumNegative>{group.profit}</S.ProfitNumNegative>
              )}
            </S.GroupProfit>
            <S.GroupAim>{group.aim}</S.GroupAim>
          </S.Group>
        ))}
    </div>
  );
};

export default GroupList;
