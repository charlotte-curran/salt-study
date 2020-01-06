import React, { useState, useRef } from "react";
import { Swipeable } from "react-swipeable";
import { useSpring, config } from "react-spring";
import {
  SliderUI,
  InnerWrapper,
  Employee,
  Headshot,
  EmployeeName,
  Title,
  Text,
  ButtonWrapperInner,
  ButtonWrapperOuter,
  Button,
  Arrow
} from "./Slider.styles";
import { useWindowDimensionsContext } from "../../Context/dimensionsContext";

const Slider = props => {
  const [page, setPage] = useState(0);
  const wrapperRef = useRef(null);
  const { content } = props;

  const { width, height } = useWindowDimensionsContext();

  const getEmployeePadding = () => {
    if (wrapperRef.current) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      return wrapperWidth / 8;
    } else if (width < 1000 || (width === 1024 && height === 1366)) {
      return width / 8;
    } else if (width >= 1000) {
      return (width * 0.5734) / 8;
    }
  };

  const buttonCounterArray =
    content.length % 2 === 0
      ? new Array(content.length / 2).fill(undefined)
      : new Array((content.length + 1) / 2).fill(undefined);

  const sliderProps = useSpring({
    transform: `translate3d(${
      wrapperRef.current ? -wrapperRef.current.offsetWidth * page : 0
    }px, 0, 0)`,
    config: width > 599 ? config.gentle : config.default
  });

  return (
    <SliderUI ref={wrapperRef}>
      <Swipeable
        onSwipedLeft={() => {
          setPage(page < buttonCounterArray.length - 1 ? page + 1 : 0);
        }}
        onSwipedRight={() => {
          setPage(page > 0 ? page - 1 : buttonCounterArray.length - 1);
        }}
        stopPropagation
        delta={5}
        flickThreshold={0.3}
      >
        <Arrow
          xmlns="http://www.w3.org/2000/svg"
          pointLeft={true}
          onClick={() => {
            setPage(page > 0 ? page - 1 : buttonCounterArray.length - 1);
          }}
        >
          <path d="M9 18l6-6-6-6" />
        </Arrow>

        <Arrow
          xmlns="http://www.w3.org/2000/svg"
          right={width}
          onClick={() => {
            setPage(page < buttonCounterArray.length - 1 ? page + 1 : 0);
          }}
        >
          <path d="M9 18l6-6-6-6" />
        </Arrow>

        <InnerWrapper
          style={sliderProps}
          employeeMargin={getEmployeePadding()}
          width={width}
        >
          {content.map((value, i) => {
            return (
              <Employee
                key={`Employee${i}`}
                margin={getEmployeePadding()}
                width={width}
                isEven={i % 2 === 0 ? true : false}
                id={`employee${i}`}
              >
                <Headshot
                  background={require(`../../images/${value.img}`)}
                  key={`Headshot${i}`}
                />
                <EmployeeName key={`EmployeeName${i}`}>
                  {value.employee_name}
                </EmployeeName>
                <Title key={`Title${i}`}>{value.title}</Title>
                <Text width={getEmployeePadding()} key={`Text${i}`}>
                  {value.footer}
                </Text>
              </Employee>
            );
          })}
        </InnerWrapper>

        <ButtonWrapperOuter>
          <ButtonWrapperInner>
            {buttonCounterArray.map((value, i) => {
              return (
                <Button
                  key={`Button${i}`}
                  isBlue={page === i ? true : false}
                  onClick={
                    page !== i
                      ? () => {
                          setPage(i);
                        }
                      : null
                  }
                />
              );
            })}
          </ButtonWrapperInner>
        </ButtonWrapperOuter>
      </Swipeable>
    </SliderUI>
  );
};

export default Slider;
