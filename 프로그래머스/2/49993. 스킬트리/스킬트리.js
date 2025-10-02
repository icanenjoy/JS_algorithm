function solution(skill, skill_trees) {
    let ans=0;
    
    for(let i=0;i<skill_trees.length;i++){
        let skill_idx =0;
        for(let j=0;j<skill_trees[i].length;j++){
            const idx = skill.indexOf(skill_trees[i][j]);
            if(idx===-1) continue;
            else if(skill_idx===idx) skill_idx++;
            else{
                skill_idx=-1;
                break;
            }
        }
        if (skill_idx!==-1) ans++;
    }
    return ans;
}