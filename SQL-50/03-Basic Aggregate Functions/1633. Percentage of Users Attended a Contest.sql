-- Write your PostgreSQL query statement below
SELECT r.contest_id, 
    ROUND(COUNT(r.user_id)::numeric / (
        (SELECT COUNT(*) FROM Users):: numeric
    ) * 100, 2) AS percentage
FROM Users u 
JOIN Register r ON r.user_id = u.user_id
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id ASC;