export const StatisticsList = ({ item: { label, percentage } }) => { 
      return <div>
                  <span>{label}</span>
                  <span>{percentage}</span>
            </div>
};