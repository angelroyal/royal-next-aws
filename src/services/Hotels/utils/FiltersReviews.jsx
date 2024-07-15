export function filterBySelectedReviews(
    dataReview,
    startQualification,
    months,
    travelType,
    language
  ) {
    let filteredData = dataReview;
  
    if (language !== "all") {
      filteredData = filteredData.filter((review) => review.lang === language);
    }
  
    if (travelType.length > 0) {
      filteredData = filteredData.filter((review) =>
        travelType.includes(review.trip_type)
      );
    }
  
    if (startQualification.length > 0) {
      filteredData = filteredData.filter((review) =>
        startQualification.includes(review.rating)
      );
    }
  
    if (months.length > 0) {
      filteredData = filteredData.filter((reviews) => {
        const date = new Date(reviews.published_date);
        const monthData = date.getUTCMonth() + 1;
        return months.some(
          (month) => monthData >= month.month1 && monthData <= month.month2
        );
      });
    }
  
    return filteredData;
  }
  
  export function filterByOrderReviews(dataReview, orderReview) {
    if (orderReview === 1) {
      dataReview = dataReview.sort(
        (a, b) => new Date(b.published_date) - new Date(a.published_date)
      );
    } else if (orderReview === 2) {
      // dataReview = dataReview.sort((a, b) => a.rating - b.rating);
      dataReview = dataReview.sort((a, b) => b.rating - a.rating);
    }
    return dataReview;
  }
  