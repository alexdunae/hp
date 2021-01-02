

// Convert speed (m/s) to pace (min/mile or min/km) in the format of 'x:xx'
        // http://yizeng.me/2017/02/25/convert-speed-to-pace-programmatically-using-ruby

        function formatPace(speed, units = 'km') {
            if (!speed || isNaN(speed) || speed <= 0) {
                return ''
            }

            let totalSeconds;
            switch(units) {
                case 'mi':
                    totalSeconds = 1609.344 / speed;
                    break;
                    case 'km':
                        totalSeconds = 1000 / speed;
                        break;
                case '100yd':
                    totalSeconds =  91.44 / speed;
                        break;
                        case '100m':
                    totalSeconds = 100 / speed;
                        break;
                        default:
                        throw new Error(`unsupported units "${units}"`)
            }

            var minutes = Math.floor(totalSeconds/60);
            var seconds = Math.round(totalSeconds % 60);
            console.log(seconds)
            if (seconds === 60) {
                minutes += 1
                seconds = 0;

            }

            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            return `${minutes}:${seconds}/${units}`;

        }

        // // def convert_meters_per_second_to_pace(speed, unit = :mi)
        // //   return unless speed && speed.positive?

        // //   total_seconds = case unit
        // //                   when :mi then 1609.344 / speed
        // //                   when :km then 1000 / speed
        // //                   when :"100yd" then 91.44 / speed
        // //                   when :"100m" then 100 / speed
        // //                   end
        //   minutes, seconds = total_seconds.divmod(60)
        //   seconds = seconds.round
        //   if seconds == 60
        //     minutes += 1
        //     seconds = 0
        //   end
        //   seconds = seconds < 10 ? "0#{seconds}" : seconds.to_s
        //   "#{minutes}m#{seconds}s/#{unit}"
export default formatPace;
