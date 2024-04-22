-- 코드를 작성해주세요
SELECT COUNT(*) AS count
FROM ECOLI_DATA
WHERE (GENOTYPE & 2 = 0) -- Check that the genotype does NOT have the 2nd trait
AND ((GENOTYPE & 1 <> 0) OR (GENOTYPE & 4 <> 0)); -- Check that the genotype has either the 1st or 3rd trait
