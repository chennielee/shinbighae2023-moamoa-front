import React from "react";
import * as S from "./GroupList.style"; // GroupList에 대한 CSS 스타일 파일을 import

const GroupList = ({ groupData }) => {
  return (
    <>
      {groupData &&
        groupData.map((group) => (
          <S.Group key={group.id}>
            <S.GroupTitle>
              <S.GroupTitleName>{group.title}</S.GroupTitleName>
              <S.IsGroup>{group.isGroup}</S.IsGroup>
            </S.GroupTitle>

            <S.GroupProfit>
              <S.ProfitIntro>수익률</S.ProfitIntro>
              <S.ProfitNum>{group.profit}</S.ProfitNum>
            </S.GroupProfit>
            <S.GroupAim>{group.aim}</S.GroupAim>
          </S.Group>
        ))}
    </>
  );
};

export default GroupList;
