import { useState } from 'react';
import SliderButton from '../SliderButton';
import './index.css';

function Slider({ pictures }) {
      const [slider, setSliderAnnimation] = useState({
            PicsIndex: 0,
            inProgress: false,
      });

      const nextSlide = () => {
            let PicsIndex = slider.PicsIndex;
            if (slider.PicsIndex < pictures.length - 1) PicsIndex++;
            else PicsIndex = 0;
            setSliderAnnimation({
                  PicsIndex: PicsIndex,
                  inProgress: true,
            });
            setTimeout(
                  () =>
                        setSliderAnnimation({
                              PicsIndex: PicsIndex,
                              inProgress: false,
                        }),
                  100
            );
      };

      const previousSlide = () => {
            let PicsIndex = slider.PicsIndex;
            if (slider.PicsIndex > 0) PicsIndex--;
            else PicsIndex = pictures.length - 1;
            setSliderAnnimation({
                  PicsIndex: PicsIndex,
                  inProgress: true,
            });
            setTimeout(
                  () =>
                        setSliderAnnimation({
                              PicsIndex: PicsIndex,
                              inProgress: false,
                        }),
                  100
            );
      };

      return (
            <div className="slider">
                  {pictures.map(
                        (picture, PicsIndex) =>
                              slider.PicsIndex === PicsIndex && (
                                    <div
                                          key={'slider-' + PicsIndex}
                                          className="slider-picture"
                                    >
                                          <img src={picture} alt="" />
                                    </div>
                              )
                  )}
                  <SliderButton direction="next" goTo={nextSlide} />
                  <SliderButton direction="previous" goTo={previousSlide} />
            </div>
      );
}
export default Slider;
