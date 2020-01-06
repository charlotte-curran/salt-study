import React, { useState, useEffect } from "react";
import {
  Wrapper,
  SaltLink,
  Logo,
  LinkWrapper,
  LogoLink,
  SaltLabel,
  City
} from "./NavBar.styles";
import { useLocaleContext } from "../../Context/localeContext";
import SaltLogo from "../../images/saltlogo.svg";
import { useScrollContext } from "../../Context/scrollContext";

export const NavBar = props => {
  const [isCampusEpicenter, setIsCampusEpicenter] = useState(false);
  const [isCareerProgram, setIsCareerProgram] = useState(false);
  const [isHowItWorks, setIsHowItWorks] = useState(false);
  const [isOurTeam, setIsOurTeam] = useState(false);
  const [isDiversity, setIsDiversity] = useState(false);
  const { refObj, isVisibleModal } = props;

  const currPos = useScrollContext().y;
  const { locale, swapLocale } = useLocaleContext();

  useEffect(() => {
    const { secondWrapperRef, squareSixRef, thirdWrapperRef } = refObj;
    if (
      secondWrapperRef.current.offsetTop <= currPos &&
      currPos < squareSixRef.current.offsetTop
    ) {
      if (!isCampusEpicenter) {
        setIsCampusEpicenter(true);
      }
    } else {
      if (isCampusEpicenter) {
        setIsCampusEpicenter(false);
      }
    }
    if (
      squareSixRef.current.offsetTop <= currPos &&
      currPos <
        squareSixRef.current.offsetTop + squareSixRef.current.offsetHeight * 0.6
    ) {
      if (!isCareerProgram) {
        setIsCareerProgram(true);
      }
    } else {
      if (isCareerProgram) {
        setIsCareerProgram(false);
      }
    }
    if (
      squareSixRef.current.offsetTop + squareSixRef.current.offsetHeight * 0.6 <
        currPos &&
      currPos < thirdWrapperRef.current.offsetTop
    ) {
      if (!isHowItWorks) {
        setIsHowItWorks(true);
      }
    } else {
      if (isHowItWorks) {
        setIsHowItWorks(false);
      }
    }
    if (window.innerWidth >= 1000) {
      if (
        thirdWrapperRef.current.offsetTop <= currPos &&
        currPos <
          thirdWrapperRef.current.offsetTop +
            thirdWrapperRef.current.offsetHeight
      ) {
        if (!isOurTeam) {
          setIsOurTeam(true);
        }
      } else {
        if (isOurTeam) {
          setIsOurTeam(false);
        }
      }
    }
    if (window.innerWidth < 1000) {
      if (
        thirdWrapperRef.current.offsetTop <= currPos &&
        currPos <
          thirdWrapperRef.current.offsetTop +
            thirdWrapperRef.current.offsetHeight / 2
      ) {
        if (!isDiversity) {
          setIsDiversity(true);
        }
      } else {
        if (isDiversity) {
          setIsDiversity(false);
        }
      }
      if (
        thirdWrapperRef.current.offsetTop +
          thirdWrapperRef.current.offsetHeight / 2 <=
          currPos &&
        currPos <
          thirdWrapperRef.current.offsetTop +
            thirdWrapperRef.current.offsetHeight
      ) {
        if (!isOurTeam) {
          setIsOurTeam(true);
        }
      } else {
        if (isOurTeam) {
          setIsOurTeam(false);
        }
      }
    }
  }, [
    currPos,
    isCampusEpicenter,
    isCareerProgram,
    isDiversity,
    isHowItWorks,
    isOurTeam,
    refObj
  ]);

  return (
    <div>
      {!isVisibleModal ? (
        <Wrapper>
          <LogoLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            href="#salt"
          >
            <Logo src={SaltLogo} />
          </LogoLink>
          <LinkWrapper>
            <SaltLink
              isCurrent={isCampusEpicenter}
              onClick={() => {
                setIsCampusEpicenter(true);
                window.scrollTo(
                  0,
                  refObj.secondWrapperRef.current.offsetTop + 1
                );
              }}
              href="#campus-epicenter"
            >
              campus epicenter
            </SaltLink>
            <SaltLink
              isCurrent={isCareerProgram}
              onClick={() => {
                setIsCareerProgram(true);
                window.scrollTo(0, refObj.squareSixRef.current.offsetTop + 1);
              }}
              href="#career-program"
            >
              career program
            </SaltLink>
            <SaltLink
              isCurrent={isHowItWorks}
              onClick={() => {
                setIsHowItWorks(true);
                window.scrollTo(
                  0,
                  refObj.squareSixRef.current.offsetTop +
                    refObj.squareSixRef.current.offsetHeight * 0.6 +
                    1
                );
              }}
              href="#how-it-works"
            >
              how does it work?
            </SaltLink>
            <SaltLink
              isCurrent={isOurTeam}
              onClick={() => {
                setIsOurTeam(true);
                window.scrollTo(
                  0,
                  refObj.thirdWrapperRef.current.offsetTop + 1
                );
              }}
              href="#diversity-in-tech"
            >
              diversity in tech
            </SaltLink>
            <SaltLink
              isCurrent={isOurTeam}
              onClick={() => {
                setIsOurTeam(true);
                window.scrollTo(
                  0,
                  refObj.thirdWrapperRef.current.offsetTop + 1
                );
              }}
              href="#our-team"
            >
              our team
            </SaltLink>
          </LinkWrapper>

          <SaltLabel>
            {isCampusEpicenter
              ? "campus epicenter"
              : isCareerProgram
              ? "career program"
              : isHowItWorks
              ? "how it works"
              : isOurTeam
              ? "our team"
              : isDiversity
              ? "diversity in tech"
              : null}
          </SaltLabel>
          <City
            onClick={() => {
              swapLocale(0);
            }}
          >
            {locale === 1
              ? "Stockholm"
              : locale === 2
              ? "Amsterdam"
              : locale === 3
              ? "Oslo"
              : ""}
          </City>
        </Wrapper>
      ) : null}
    </div>
  );
};

export default NavBar;
